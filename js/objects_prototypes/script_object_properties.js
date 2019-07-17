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