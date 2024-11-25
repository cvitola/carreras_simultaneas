import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GaugeChart, CanvasRenderer]);

const Grafica = () => {
  // Referencia al elemento DOM donde se renderizará el gráfico
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Inicializa el gráfico
    const myChart = echarts.init(chartRef.current, 'dark');

    // Configuración del gráfico
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
            fontSize: 40,
            offsetCenter: [0, '80%'],
          },
          data: [
            {
              value: 50,
            },
          ],
        },
      ],
    };

    // Aplica la configuración al gráfico
    myChart.setOption(option);

    // Limpia el gráfico al desmontar el componente
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default Grafica;
