'use strict';

const track = {
    name: {
        author: 'BWWWOYS x PIXELORD',
        title: 'URL'
    },
    duration: '3:45',
    ganre: ['electronic'],
    album: '',
    year: '',
    country: '',
    tags: ['clouds', 'marimba']
}

/* @@@
Using JavaScript Property Descriptors:
    1. Writable
    2. Enumerable
    3. Configurable
*/

/* @@@
    1. Writable
*/

// Object.defineProperty(track, 'duration', {writable: false}); // @@ work only with 'use strict'
track.duration = '5:00';
// display(Object.getOwnPropertyDescriptor(track, 'duration'));

Object.defineProperty(track, 'name', {writable: false});
// Object.freeze(track.name); // @@ need for objects, turn off for next example
display(Object.getOwnPropertyDescriptor(track, 'name'));
// track.name.title = 'lalalalal'; 


/* @@@
    2. Enumerable
*/

const cat = {
    name: {
        first: 'Flueffy',
        last: 'LeBeouf'
    },
    color: 'White'
}

// Object.defineProperty(cat, 'name', {enumerable: false});
for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName]);
}
display(Object.keys(cat));
display(JSON.stringify(cat));

/* @@@
    3. Configurable
*/

Object.defineProperty(cat, 'name', {configurable: false});
// Object.defineProperty(cat, 'name', {configurable: true}); // @@ rewriting configurable is not working,
// Object.defineProperty(cat, 'name', {writable: false}); // @@ not working, because we set configurable: false
// delete cat.name; // @@ not working, because we set configurable: false


display(Object.getOwnPropertyDescriptor(cat, 'name'));


/* @@@
Using Getters and Setters 
*/

Object.defineProperty(track, 'fullName',
{
  get: function() {
      return this.name.author + ' - ' + this.name.title
  },
  set: function(value) {
      let nameParts = value.split(' - ')
      this.name.author = nameParts[0],
      this.name.title = nameParts[1]
  }
})

track.fullName = 'Zomby - Horrid';
display(track.name);



