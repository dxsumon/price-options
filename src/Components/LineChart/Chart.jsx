import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const chartData = [
        { id: 1, name: 'Alice', mathScore: 85, englishScore: 78 },
        { id: 2, name: 'Bob', mathScore: 92, englishScore: 80 },
        { id: 3, name: 'Charlie', mathScore: 70, englishScore: 85 },
        { id: 4, name: 'David', mathScore: 88, englishScore: 23 }
      ];
           
    return (
        <div>
            <LineChart width={600} height={400} data={chartData}>
                <Line dataKey={'mathScore'} stroke='red'></Line>
                <Line dataKey="englishScore" stroke='blue'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Chart;