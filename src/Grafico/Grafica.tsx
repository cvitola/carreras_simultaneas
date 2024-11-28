import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GaugeChart, CanvasRenderer]);

type GraficaProps = {
  val: number;
};

const Grafica = ({ val }: GraficaProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const myChartRef = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Inicializa el gráfico solo una vez
    myChartRef.current = echarts.init(chartRef.current, 'dark');
    const myChart = myChartRef.current;

    const option: echarts.ComposeOption<GaugeSeriesOption> = {
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18,
          },
          axisLine: {
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 10,
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 30,
            offsetCenter: [0, '80%'],
          },
          data: [
            {
              value: val,
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  useEffect(() => {
    // Actualiza el valor del gráfico cuando `val` cambie
    if (myChartRef.current) {
      myChartRef.current.setOption({
        series: [
          {
            data: [
              {
                value: val,
              },
            ],
          },
        ],
      });
    }
  }, [val]);

  return <div ref={chartRef} style={{ width: '100%', height: '300%' }}></div>;
};

export default Grafica;
