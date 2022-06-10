"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoData = void 0;
const dateStringtoData = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
exports.dateStringtoData = dateStringtoData;
