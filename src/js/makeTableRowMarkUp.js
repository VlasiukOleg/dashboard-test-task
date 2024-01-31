import { customers } from './js/customers.js';

const tableBody = document.querySelector('tbody');
const itemsPerPage = 8;

export const makeTableRowCustomersMarkUp = customers => {
  return customers
    .map(({ name, company, phone, email, country, status }) => {
      let classStatus = '';
      let textStatus = '';
      if (status) {
        classStatus = 'customer__status--active';
        textStatus = 'Active';
      } else {
        classStatus = 'customer__status--inActive';
        textStatus = 'Inactive';
      }
      return `
        <tr>
            <td>${name}</td>
            <td>${company}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>${country}</td>
            <td><p class=${classStatus}>${textStatus}</button></p>
        </tr>
        `;
    })
    .join('');
};

tableBody.innerHTML = makeTableRowCustomersMarkUp(customers);
