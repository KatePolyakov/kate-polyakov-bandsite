const dates = [
  {
    date: 'Mon Sept 09 2024',
    place: 'Ronald Lane',
    city: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 17 2024',
    place: 'Pier 3 East',
    city: 'San Francisco, CA',
  },
  {
    date: 'Sat Oct 12 2024',
    place: 'View Lounge',
    city: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 16 2024',
    place: 'Hyatt Agency',
    city: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 29 2024',
    place: 'Moscow Center',
    city: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 18 2024',
    place: 'Press Club',
    city: 'San Francisco, CA',
  },
];

// select the parent element
const concertList = document.querySelector('.calendar__list');
console.log(concertList);

function displayConcert(concert) {
  //1. create an element
  const concertElement = document.createElement('div');

  //2a. add class
  concertElement.classList.add('calendar__concert');

  //2b.
  const subheaderDate = document.createElement('p');
  subheaderDate.classList.add('calendar__subheader-date');
  subheaderDate.innerText = 'DATE';
  concertElement.append(subheaderDate);

  const calendarDate = document.createElement('p');
  calendarDate.classList.add('calendar__date');
  calendarDate.textContent = concert.date;
  concertElement.append(calendarDate);

  const subheaderVenue = document.createElement('p');
  subheaderVenue.classList.add('calendar__subheader-venue');
  subheaderVenue.innerText = 'VENUE';
  concertElement.append(subheaderVenue);

  const calendarVenue = document.createElement('p');
  calendarVenue.classList.add('calendar__venue');
  calendarVenue.textContent = concert.place;
  concertElement.append(calendarVenue);

  const subheaderLocation = document.createElement('p');
  subheaderLocation.classList.add('calendar__subheader-location');
  subheaderLocation.innerText = 'LOCATION';
  concertElement.append(subheaderLocation);

  const calendarLocation = document.createElement('p');
  calendarLocation.classList.add('calendar__location');
  calendarLocation.textContent = concert.city;
  concertElement.append(calendarLocation);

  const calendarButton = document.createElement('button');
  calendarButton.classList.add('calendar__button');
  calendarButton.innerText = 'BUY TICKETS';
  concertElement.append(calendarButton);

  const calendarHr = document.createElement('hr');
  calendarHr.classList.add('calendar__divider');
  concertElement.append(calendarHr);

  //3. append to the parent
  concertList.append(concertElement);
}

function displayConcerts() {
  // Clear the content of the .calendar__list element
  //concertList.innerHTML = '';
  dates.forEach((concert) => {
    displayConcert(concert);
  });
}

displayConcerts();
