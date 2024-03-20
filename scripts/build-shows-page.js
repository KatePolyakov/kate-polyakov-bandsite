import { BandSiteAPI } from './band-site-api.js';

const bandSiteData = new BandSiteAPI('e0eea5f0-0f8c-4b54-9fc4-ff50843766d4');

// select the parent element
const concertList = document.querySelector('.calendar__list');

//title for tablet/desktop
const titleDesktop = () => {
  const titles_group = document.createElement('div');
  titles_group.classList.add('calendar__titles');

  const subheaderDate = document.createElement('p');
  subheaderDate.classList.add('calendar__titles-date');
  subheaderDate.innerText = 'DATE';
  titles_group.append(subheaderDate);

  const subheaderLocation = document.createElement('p');
  subheaderLocation.classList.add('calendar__titles-location');
  subheaderLocation.innerText = 'LOCATION';
  titles_group.append(subheaderLocation);

  const subheaderVenue = document.createElement('p');
  subheaderVenue.classList.add('calendar__titles-venue');
  subheaderVenue.innerText = 'VENUE';
  titles_group.append(subheaderVenue);

  //3. append to the parent
  concertList.append(titles_group);
};

titleDesktop();

function displayConcert(concert) {
  //1. create an element
  const concertElement = document.createElement('div');

  //2a. add class
  concertElement.classList.add('calendar__concert');

  //subheaders for mobile version
  const subheaderDate = document.createElement('p');
  subheaderDate.classList.add('calendar__subheader-date');
  subheaderDate.innerText = 'DATE';
  concertElement.append(subheaderDate);

  const calendarDate = document.createElement('p');
  calendarDate.classList.add('calendar__date');
  calendarDate.textContent = new Date(concert.date).toLocaleDateString();
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
  calendarLocation.textContent = concert.location;
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

async function displayConcerts() {
  const allShows = await bandSiteData.getShows();
  allShows.forEach((concert) => {
    displayConcert(concert);
  });
}

displayConcerts();
