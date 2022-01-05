import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

	chartRef = React.createRef();
	componentDidMount() {
        console.log("One Year")

		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "line",
			data: {
				labels: [(this.props.dateadded), "One Year", "Six Month", "One Month", "Current"],
				datasets: [{ 
					data: [this.props.max_price, this.props.one_year_price, this.props.six_month_price, this.props.one_month_price, this.props.current_price, this.props.dateadded],

                    label: "Total",
					borderColor: "#3e95cd",
					// backgroundColor: "#ffffff",
	
				}, 
				]
			},
		});
	}
	render() {
		return (
            <div>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
	}
}
