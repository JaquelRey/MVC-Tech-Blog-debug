const { default: test } = require('node:test');
const { format } = require('path');
const {format_date} = require('../utils/helpers');


test('format() returns a date string', () => {
    const date = new Date('2022-08-23 16:12:03');

    expect(format_date(date)).toBe('8/23/2022');
});

const {format_pural} = require('../utils/helpers')

// plural point and comments
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('tiger', 2);
      const single = format_plural('lion', 1);
      
      expect(plural).toBe('tigers');
      expect(single).toBe('lion');
});

const {format_url} = require('../utils/helpers');

// shortening URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});