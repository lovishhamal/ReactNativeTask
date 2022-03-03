import React, {useContext, useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import {commonStyles as cs, mainStyles as ms} from '../assets/styles';
import {
  Header,
  Customtext,
  TextInputField,
  Divider,
  CustomButton,
} from '../components/common';
import {Message} from '../components/common/message';
import {colors} from '../config/app_config';
import {ROUTES} from '../config/constants';
import {Context} from '../reducer/reducer';
import {getAsyncStorage, setAsyncstorage} from '../utils/local_storage';

export const Main = (props: any) => {
  const {state, dispatch} = useContext<any>(Context);

  const [values, setValues] = useState<any>({
    name: '',
    country: '',
    brand: '',
    number: '',
  });
  const [loading, setLoading] = useState(false); // for api call
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const getData = await getAsyncStorage('data', true);
      dispatch({type: 'FETCH_DATA', payload: getData ?? []});
    })();
  }, []);

  const onChanged = (name: string, value: string | number) => {
    if (error) setError(null);
    setValues({...values, [name]: value});
  };

  const validateData = (data: any) => {
    // better use formik
    let isValid = true;
    let message = 'Please fill all the fields';
    Object.values(data).filter(item => item !== '').length !== 4 &&
      (isValid = false);
    const number = parseInt(data.number);
    if (number < 9000000000 || number > 9999999999) {
      isValid = false;
      message = 'Invalid phone number';
    }

    return {isValid, message};
  };

  const onSubmit = async () => {
    const {isValid, message} = validateData(values);
    if (!isValid) return setError(message);
    if (state.data.length === 0) {
      await setAsyncstorage('data', [values]);
    } else {
      await setAsyncstorage('data', [...state.data, values]);
    }
    setValues({});
    dispatch({type: 'SET_DATA', payload: [values]});
  };

  return (
    <View style={[cs.flex1, ms.wrapper]}>
      <View style={ms.container}>
        <View style={ms.body}>
          <Customtext text="Fill up the form" style={ms.title} />
          {error && <Message text={error} error />}
          <Divider />
          <TextInputField
            name="name"
            placeholder="Name *"
            value={values.name}
            onChanged={onChanged}
          />
          <Divider />
          <TextInputField
            name="country"
            placeholder="Country *"
            value={values.country}
            onChanged={onChanged}
          />
          <Divider />
          <TextInputField
            name="brand"
            placeholder="Favorite Phone Brand *"
            value={values.brand}
            onChanged={onChanged}
          />
          <Divider />
          <TextInputField
            keyboardType="numeric"
            name="number"
            placeholder="Phone Number *"
            value={values.number}
            onChanged={onChanged}
            maxLength={10}
          />
          <Divider />
          <View style={ms.buttonContainer}>
            <CustomButton
              style={ms.button}
              titleColor={colors.black}
              title="Submit"
              onPress={() => onSubmit()}
              loading={loading}
            />
          </View>
        </View>
        {state.data?.length > 0 && (
          <Pressable
            onPress={() => props.navigation.navigate(ROUTES.TABLE)}
            style={ms.table}>
            <Customtext text="Go to table" />
          </Pressable>
        )}
      </View>
    </View>
  );
};
