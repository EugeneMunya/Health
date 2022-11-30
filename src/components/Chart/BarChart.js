import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';


export const options = {
  responsive: true,
   indexAxis:'y',
   pointLabels: { fontSize: 30 },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Survey shows how people feel about their mental health for each province',
    },
  },
};

const BarChart = () => {
    const data ={
        labels:[
            'Kigali',
            'Norther Province',
            'Easter Province',
            'Western province',
            'Southern province'
        ],
        datasets:[
            {
                fill:true,
                label:'Mental Health survey 2022',
                data:[10,5,7,3,2],
                borderColor: '#cc99ff',
                backgroundColor: '#cc99ff',
            }
        ]
    }
    return (
        <Flex 
        w='100%'
        minH='100vh'
        overflow='auto'
        >
            <Bar options={options} data={data}/>

        </Flex>
    );
};

export default BarChart;