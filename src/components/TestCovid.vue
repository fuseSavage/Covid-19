<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-3 mb-3">รายงานการติดเชื้อ Covid-19 ทั่วโลก</div>
    </div>

    <div>
      <select @change="onChange($event)">
        <option value="30">30 วัน</option>
        <option value="15">15 วัน</option>
      </select>
    </div>

    <div id="chart">
      <apexchart
        ref="realtimeChart"
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <!-- {{ datas.cases }} -->

    <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">วันที่</th>
          <th scope="col">ผู้ติดเชื้อทั้งหมด</th>
          <th scope="col">ผู้ติดเชื้อรายใหม่</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datas" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.cases.toLocaleString() }} ราย</td>
          <td>{{ item.newcase.toLocaleString() }} ราย</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      datas: [],
      series: [
        {
          name: "จำนวนผู้ติดเชื้อรายใหม่",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          //   text: 'Product Trends by Month',
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          categories: [],
        },
      },
    };
  },

  async mounted() {
    this.handleSelect(30);
  },

  methods: {
    test(data) {
      console.log("test", data);
    },

    onChange(event) {
      console.log("value", event.target.value);
      this.handleSelect(event.target.value);
    },

    async handleSelect(day) {
      const dataget = await axios.get(
        `https://disease.sh/v3/covid-19/historical/all?lastdays=${day}`
      );

      let objCases = [];
      let newObjCases = [];
      let date = [];
      let dataInTable = [];

      //   Cases
      Object.keys(dataget.data.cases).forEach(function (key) {
        const cases = dataget.data.cases[key];
        objCases.push({ date: key, cases: cases });
      });

      objCases.reverse();

      for (let i = 0; i < objCases.length; i++) {
        if (i == 0) {
          console.log("");
        } else {
          const newcase = objCases[i - 1].cases - objCases[i].cases;
          newObjCases.push(newcase);
          date.push(objCases[i - 1].date);
          dataInTable.push({ ...objCases[i - 1], newcase: newcase });
          if (i == objCases.length - 1) {
            break;
          }
        }
      }

      console.log("dataNew", objCases);

      this.datas = dataInTable;

      this.test(dataget.data);

      this.$refs.realtimeChart.updateSeries(
        [
          {
            data: newObjCases
          },
        ],
        false,
        true
      );
      this.$refs.realtimeChart.updateOptions(
        {
          xaxis: {
            categories: date,
          },
        },
        false,
        true
      );
    },
  },
};
</script>

<style></style>
