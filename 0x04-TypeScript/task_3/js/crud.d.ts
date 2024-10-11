import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement) {
    console.log('Inserting row', row);
    // Insert row logic here
    return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(row: RowID) {
    console.log('Deleting row', rowId);
    // Delete row logic here
    return;
}

export function updateRow(rowId: RowID, rowElement: RowElement) {
    console.log('Updating row', row, 'with', rowElement);
    // Update row logic here

    return rowId;
}