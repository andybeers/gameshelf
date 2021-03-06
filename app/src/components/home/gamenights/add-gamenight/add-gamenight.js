import template from './add-gamenight.html';
import styles from './add-gamenight.scss';

export default {
  template,
  bindings: {
    current: '<'
  },
  controller
};

controller.$inject = ['gamenightService', '$state'];

function controller(gamenightService, $state) {
  this.styles = styles;
  this.tab = 'gamenights';
  this.today = new Date();
  this.next = this.year + 1;
  
  this.create = () => {
    const gamenight = {
      name: this.name,
      description: this.description,
      date: new Date(this.year.value, this.month.value, this.day.value)
    };

    gamenightService.add(gamenight)
      .then(res => {
        $state.go('gamenight', {id: res._id});
      })
      .catch(err => {
        console.log(err);
      });
  };

  this.months = [
    { name: 'January', value: '0' },
    { name: 'February', value: '01' },
    { name: 'March', value: '02' },
    { name: 'April', value: '03' },
    { name: 'May', value: '04' },
    { name: 'June', value: '05' },
    { name: 'July', value: '06' },
    { name: 'August', value: '07' },
    { name: 'September', value: '08' },
    { name: 'October', value: '09' },
    { name: 'November', value: '10' },
    { name: 'December', value: '11' },
  ];

  this.days = [
    { name: 1, value: '01' },
    { name: 2, value: '02' },
    { name: 3, value: '03' },
    { name: 4, value: '04' },
    { name: 5, value: '05' },
    { name: 6, value: '06' },
    { name: 7, value: '07' },
    { name: 8, value: '08' },
    { name: 9, value: '09' },
    { name: 10, value: '10' },
    { name: 11, value: '11' },
    { name: 12, value: '12' },
    { name: 13, value: '13' },
    { name: 14, value: '14' },
    { name: 15, value: '15' },
    { name: 16, value: '16' },
    { name: 17, value: '17' },
    { name: 18, value: '18' },
    { name: 19, value: '19' },
    { name: 20, value: '20' },
    { name: 21, value: '21' },
    { name: 22, value: '22' },
    { name: 23, value: '23' },
    { name: 24, value: '24' },
    { name: 25, value: '25' },
    { name: 26, value: '26' },
    { name: 27, value: '27' },
    { name: 28, value: '28' },
    { name: 29, value: '29' },
    { name: 30, value: '30' },
    { name: 31, value: '31' }
  ];

  this.currentYear = this.today.getFullYear();
  this.nextYear = this.currentYear + 1;

  this.years = [
    { name: this.currentYear, value: this.currentYear },
    { name: this.nextYear, value: this.nextYear }
  ];

  this.month = this.months[this.today.getMonth()];
  const dayInt = this.today.getDate() - 1;
  this.day = this.days[dayInt];
  this.year = this.years[0];
}