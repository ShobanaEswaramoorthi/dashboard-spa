import React, { Component } from "react";
import { FiUsers, FiDollarSign, FiBox, FiTrendingUp } from "react-icons/fi";
import LineChart from "../components/Charts/LineChart";

import Chart from "react-apexcharts";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "line",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.7,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "$135,965",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
        subtitle: {
          text: "Profits",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },
      series: [
        {
          data: [20, 5, 30, 15, 50],
        },
        {
          data: [4, 12, 56, 73],
        },
      ],
      options1: {
        chart: {
          type: "line",
          height: 160,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month'
          }
        },
      },
      series1: [
        {
          name: "Earning",
          data: [20, 50, 80, 100, 50, 30],
        },
        {
          name: "Expense",
          data: [-20, -50, -80, -100, -50, -30],
        },
      ],
    };
  }
  tableFillData = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <tr>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>

              <div className="ml-4">
                <div className="text-sm leading-5 font-medium text-gray-900">
                  John Doe
                </div>
                <div className="text-sm leading-5 text-gray-500">
                  john@example.com
                </div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-900">
              Software Engineer
            </div>
            <div className="text-sm leading-5 text-gray-500">Web dev</div>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>

          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            Owner
          </td>

          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
        </tr>
      );
    }
    return arr;
  };
  render() {
    return (
      <div>
        <div className="mt-4">
          <div className="grid grid-cols-3 sm:grid-flow-col mb-5 flex-center gap-4">
            <div className="flex px-5 py-6 shadow-sm rounded-md bg-white">
              <div className="flex flex-col">
                <div className="mb-5">
                  <h5 className="text-md font-medium text-gray-600 mb-2">
                    Congratulations 🎉 John!
                  </h5>
                  <p className="text-xs text-gray-500">
                    You have won gold medal
                  </p>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium mb-4">
                    <a href="#" className="text-indigo-500">
                      $48.9k
                    </a>
                  </h3>
                  <p>
                    <a
                      href="#"
                      className="text-sm font-medium rounded-md py-3 px-6 bg-indigo-500 text-white"
                    >
                      View Sales
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-2  shadow-sm rounded-md bg-white">
              <div className="p-6">
                <div className="flex justify-between items-center pb-3">
                  <div className="flex items-center">
                    <h5 className="text-lg font-medium text-gray-600">
                      Statistics
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500">Updated 1 month ago</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 py-5">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full text-purple-700 bg-purple-100 ">
                      <FiTrendingUp size="20" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-600">
                        8,282
                      </h4>
                      <div className="text-xs text-gray-500">Sales</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full text-green-700 bg-green-100 ">
                      <FiUsers size="20" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-600">
                        8,282
                      </h4>
                      <div className="text-xs text-gray-500">New Users</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full text-pink-700 bg-pink-100">
                      <FiBox size="20" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-600">
                        215,542
                      </h4>
                      <div className="text-xs text-gray-500">Products</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full text-yellow-700 bg-yellow-100">
                      <FiDollarSign size="20" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-600">
                        200,521
                      </h4>
                      <div className="text-xs text-gray-500">Total Orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mb-5 flex-center gap-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col px-5 py-6 shadow-sm rounded-md bg-white">
                <div style={{ maxWidth: "120px", width: "100%" }}>
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    width={"100%"}
                    height={"100%"}
                    type="line"
                    id="apexchart-line"
                  />
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 shadow-sm rounded-md bg-white">
                <div style={{ maxWidth: "120px", width: "100%" }}>
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    width={"100%"}
                    height={"100%"}
                    type="bar"
                    id="apexchart-bar"
                  />
                </div>
              </div>
            </div>
            <div class="col-span-2  shadow-sm rounded-md bg-white">
              <div className="p-6">
                <div className="flex justify-between items-center pb-3">
                  <div className="flex items-center">
                    <h5 className="text-lg font-medium text-gray-600">
                      Revenue report
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500">Updated 1 month ago</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div style={{ maxWidth: "80%", width: "100%" }}>
                    <Chart
                      options={this.state.options1}
                      series={this.state.series1}
                      type="bar"
                      id="apexchart-bar-revenue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8"></div>

        <div className="flex flex-col mt-8">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>

                <tbody className="bg-white">{this.tableFillData()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
