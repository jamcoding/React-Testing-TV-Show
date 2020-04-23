import React from 'react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');
// console.log('mockFetchShow', mockFetchShow);

test('App mock fetch show data', async () => {
    const mockData = [{}];
    mockFetchShow.mockResolvedValueOnce(mockData);
})