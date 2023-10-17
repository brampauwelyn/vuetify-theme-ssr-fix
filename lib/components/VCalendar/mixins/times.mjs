// @ts-nocheck
/* eslint-disable */

import Vue from 'vue';
import { validateTimestamp, parseTimestamp, parseDate } from "../util/timestamp.mjs";
export default Vue.extend({
  name: 'times',
  props: {
    now: {
      type: String,
      validator: validateTimestamp
    }
  },
  data: () => ({
    times: {
      now: parseTimestamp('0000-00-00 00:00', true),
      today: parseTimestamp('0000-00-00', true)
    }
  }),
  computed: {
    parsedNow() {
      return this.now ? parseTimestamp(this.now, true) : null;
    }
  },
  watch: {
    parsedNow: 'updateTimes'
  },
  created() {
    this.updateTimes();
    this.setPresent();
  },
  methods: {
    setPresent() {
      this.times.now.present = this.times.today.present = true;
      this.times.now.past = this.times.today.past = false;
      this.times.now.future = this.times.today.future = false;
    },
    updateTimes() {
      const now = this.parsedNow || this.getNow();
      this.updateDay(now, this.times.now);
      this.updateTime(now, this.times.now);
      this.updateDay(now, this.times.today);
    },
    getNow() {
      return parseDate(new Date());
    },
    updateDay(now, target) {
      if (now.date !== target.date) {
        target.year = now.year;
        target.month = now.month;
        target.day = now.day;
        target.weekday = now.weekday;
        target.date = now.date;
      }
    },
    updateTime(now, target) {
      if (now.time !== target.time) {
        target.hour = now.hour;
        target.minute = now.minute;
        target.time = now.time;
      }
    }
  }
});
//# sourceMappingURL=times.mjs.map