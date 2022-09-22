import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      {/** Search view */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput
            keyboardType='default'
            placeholder='Restaurants and cuisines'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className='bg-gray-100'
        showsVerticalScrollIndicator={false}
      >
        {/* Category */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
        />
        <FeaturedRow
          id='123'
          title='Taste Discount'
          description='Paid placements from our partners'
        />
        <FeaturedRow
          id='123'
          title='Offers near you'
          description='Paid placements from our partners'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
