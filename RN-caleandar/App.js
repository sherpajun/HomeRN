
import React,{useState} from 'react';
import { Calendar,LocaleConfig,CalendarList,Agenda } from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';


LocaleConfig.locales.kr = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';
const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;


const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState([]);
class DummyData{ 
constructor(props) {
    this.state = {
        items: {},

        data: {
            '2022-05-10': [{ name: 'item 1 - any js object' }],
            '2022-05-15': [{ name: 'item 2 - any js object', height: 80 }],
            '2022-05-16': [],
            '2022-05-17': [{ name: '부산대학병원' }, { name: 'any js object' }],
        },

    };
   }
}
return (
<View style={{ flex: 1 }}>
    <Agenda
  items={DummyData.items}
  markingType={'custom'}
  // Callback that gets called when items for a certain month should be loaded (month became visible)
  // Callback that fires when the calendar is opened or closed
  onCalendarToggled={calendarOpened => {
    console.log(calendarOpened);
  }}
  // Callback that gets called on day press
  onDayPress={day => {
    console.log('day pressed');
  }}
  // Callback that gets called when day changes while scrolling agenda list
  onDayChange={day => {
    console.log('day changed');
  }}
  // Initially selected day
  selected={'2022-05-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2022-05-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  // Max amount of months allowed to scroll to the past. Default = 50
pastScrollRange={7}
monthFormat={'yyyy MMM'}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={7}
  // Specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {
    return <View />;
  }}
  // Specify how each date should be rendered. day can be undefined if the item is not first in that day
  // renderDay={
  //   this.renderDay.bind(this)
  //   //return <View />;
  // }
  // Specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {
    return r1.name !== r2.name;
  }}
  // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
  markedDates={{
    '2022-05-16': {selected: true, marked: true},
    '2022-05-17': {marked: true},
    '2022-05-18': {disabled: true},
  }}
  // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
  disabledByDefault={true}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
  // Agenda theme
  theme={{
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue',
  }}
  // Agenda container style
  style={{}}










/>

  </View>
  );
};
export default Schedule;
