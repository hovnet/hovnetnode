import { Injectable } from '@angular/core';
import{ GlobalVars } from './common/Global-Vars';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
// import * as logo from './mylogo.js';


@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }

  exportExcel(excelData) {

    //Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers
    const data = excelData.data;

    //Create a workbook with a worksheet
    let workbook = new Workbook();
    // let worksheet = workbook.addWorksheet('Sales Data');
    let worksheet = workbook.addWorksheet(GlobalVars.BdikotDir);


    //Add Row and formatting
    worksheet.mergeCells('C1', 'F4');
    let titleRow = worksheet.getCell('C1');
    titleRow.value = title
    titleRow.font = {
      name: 'Calibri',
      size: 16,
      underline: 'single',
      bold: true,
      color: { argb: '0085A3' }
    }
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' }

    // Date
    worksheet.mergeCells('G1:H4');
    let d = new Date();
    let mon = d.getMonth() + 1;
    let date = d.getDate() + '/' + mon + '/' + d.getFullYear();
    let dateCell = worksheet.getCell('G1');
    dateCell.value = date;
    dateCell.font = {
      name: 'Calibri',
      size: 12,
      bold: true
    }
    dateCell.alignment = { vertical: 'middle', horizontal: 'center' }

    //Add Image
    // let myLogoImage = workbook.addImage({
    //   base64: logo.imgBase64,
    //   extension: 'png',
    // });
    // worksheet.mergeCells('A1:B4');
    // worksheet.addImage(myLogoImage, 'A1:B4');

    //Blank Row 
    worksheet.addRow([]);

    //Adding Header Row
    let headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '4167B8' },
        bgColor: { argb: '' },
      }
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12
      }
    })


    // Adding Data with Conditional Formatting
    data.forEach(d => {
      let row = worksheet.addRow(d);

      let sales = row.getCell(26);
      let color = 'FF99FF99';
      if (+sales.value < 200000) {
        color = 'FF9999'
      }

      sales.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color }
      }
    }
    );

    worksheet.getColumn(1).width = 13;
    worksheet.getColumn(1).alignment = { vertical: 'middle', horizontal: 'right' };
    worksheet.getColumn(2).alignment = { vertical: 'middle', horizontal: 'right' };

    worksheet.getColumn(2).width = 12;
    worksheet.getColumn(3).width = 11;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 14;
    worksheet.getColumn(6).width = 14;
    worksheet.getColumn(7).width = 16;
    worksheet.getColumn(7).alignment = { vertical: 'middle', horizontal: 'right' };
    worksheet.getColumn(8).width = 30;
    worksheet.getColumn(9).width = 15;
    worksheet.getColumn(10).alignment = { vertical: 'middle', horizontal: 'right' };
    worksheet.getColumn(11).alignment = { vertical: 'middle', horizontal: 'right' };

    worksheet.getColumn(10).width = 13;
    worksheet.getColumn(11).width = 13;
    // worksheet.getColumn(8).width = 35;

    worksheet.addRow([]);
   
    //Footer Row
    let footerRow = worksheet.addRow(['מערכת חובנט-דוחות לקוח לאישור לקראת הפקה בהוצאה לפועל    ' + date]);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFB050' }
    };

    // Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
    worksheet.views = [{state: 'frozen', ySplit: 6, rightToLeft: true}];
    //Generate & Save Excel File
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      // fs.saveAs(blob, GlobalVars.BdikotDir);
      // fs.saveAs(blob, 'c:\bdikot\Rechv\קובץ עיקול רכב לבדיקה.xlsx');
      fs.saveAs(blob, 'c:\ar.xlsx');     //c:\bdikot\Rechv\קובץ עיקול רכב לבדיקה.xlsx
    })

  }
}
