
// task_3/js/main.ts

import {insertRow, deleteRow, updateRow} from './crud';
import {RowID, RowElement} from './interface';

// onejct
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = insertRow(row);

const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 25,
}
updateRow(newRowID, updatedRow);
deleteRow(newRowID)
