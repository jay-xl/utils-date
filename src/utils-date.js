'use strict';

import { DateType } from './lib/date-extend';

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
};

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
};

/**
 *
 * @param {String|Number} datetime
 * @param {String|Number} num
 * @param {String} type
 * @return {Date}
 */
function calc(datetime, num, type) {

};

export default {
	parse,
	format,
	calc,
	YEAR: DateType.Year,
	MONTH: DateType.Month,
	DATE: DateType.Date,
	HOUR: DateType.Hour,
	MINUTE: DateType.Minute,
	SECOND: DateType.Second,
	MILISECOND: DateType.Milisecond
}