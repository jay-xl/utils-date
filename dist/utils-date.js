/*!
 * utils-date v1.2.0
 * (c) 2018-2018 Slience HVK
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.utilsDate = factory());
}(this, (function () { 'use strict';

	var DateType = {
	  Year: 'Year',
	  Month: 'Month',
	  Date: 'Date',
	  Hour: 'Hour',
	  Minute: 'Minute',
	  Second: 'Second',
	  Milisecond: 'Milisecond'
	};

	/**
	 * Extended Date format method
	 * @param {String} fmt
	 * @return String
	 */
	Date.prototype.format = function (fmt) {
	  // Define format time parameters
	  var obj = {
	    yyyy: this.getFullYear(),
	    yy: ('' + this.getFullYear()).slice(-2),
	    M: this.getMonth() + 1,
	    MM: ('0' + (this.getMonth() + 1)).slice(-2),
	    d: this.getDate(),
	    dd: ('0' + this.getDate()).slice(-2),
	    H: this.getHours(),
	    HH: ('0' + this.getHours()).slice(-2),
	    h: this.getHours() % 12,
	    hh: ('0' + this.getHours() % 12).slice(-2),
	    m: this.getMinutes(),
	    mm: ('0' + this.getMinutes()).slice(-2),
	    s: this.getSeconds(),
	    ss: ('0' + this.getSeconds()).slice(-2),
	    w: ['日', '一', '二', '三', '四', '五', '六'][this.getDay()]
	  };
	  return fmt.replace(/([a-z]+)/ig, function ($1) {
	    return obj[$1] || $1;
	  });
	};

	/**
	 * 日期计算
	 * @param {String|Number} num
	 * @param {String} type
	 */
	Date.prototype.calc = function (num, type) {};

	/**
	 * 日期年计算
	 * @param {*} num
	 */
	Date.prototype.addYear = function (num) {};

	/**
	 * 日期月计算
	 * @param {*} num
	 */
	Date.prototype.addMonth = function (num) {};

	/**
	 * 日期日计算
	 * @param {*} num
	 */
	Date.prototype.addDate = function (num) {};

	/**
	 * 日期小时计算
	 * @param {*} num
	 */
	Date.prototype.addHour = function (num) {};

	/**
	 * 日期分钟计算
	 * @param {*} num
	 */
	Date.prototype.addMinute = function (num) {};

	/**
	 * 日期秒计算
	 * @param {*} num
	 */
	Date.prototype.addSecond = function (num) {};

	/**
	 * 日期毫秒计算
	 * @param {*} num
	 */
	Date.prototype.addMilisecond = function (num) {};

	var dateExtend = {
	  Date: Date,
	  DateType: DateType
	};
	var dateExtend_1 = dateExtend.DateType;

	/**
	 * Conversion date
	 * @param {String|Numer} datetime
	 * @return {Date} Date
	 */
	function parse(datetime) {
		try {
			if (typeof datetime !== "number") {
				// Clear the space before and after the string
				datetime = datetime.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
				// Format the date format
				datetime = datetime.replace("/Date(", "").replace(")/", "").split("+")[0];
			}
			return new Date(datetime);
		} catch (err) {
			throw new Error('the date entered is in the wrong format');
		}
	}
	/**
	 * Date format method
	 * @param {String|Number} datetime
	 * @param {String} fmt
	 * @return {String}
	 */
	function format(datetime, fmt) {
		// Determine if it is a Date type
		if (datetime instanceof Date) {
			return datetime.format(fmt);
		}
		return parse(datetime).format(fmt);
	}
	/**
	 *
	 * @param {String|Number} datetime
	 * @param {String|Number} num
	 * @param {String} type
	 * @return {Date}
	 */
	function calc(datetime, num, type) {}
	var utilsDate = {
		parse: parse,
		format: format,
		calc: calc,
		YEAR: dateExtend_1.Year,
		MONTH: dateExtend_1.Month,
		DATE: dateExtend_1.Date,
		HOUR: dateExtend_1.Hour,
		MINUTE: dateExtend_1.Minute,
		SECOND: dateExtend_1.Second,
		MILISECOND: dateExtend_1.Milisecond
	};

	return utilsDate;

})));
