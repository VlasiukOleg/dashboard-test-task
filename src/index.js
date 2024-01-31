import { customers } from './js/customers.js';

//!  TableRow Customer MarkUp
const tableBody = document.querySelector('tbody');

// const itemsPerPage = 8;

const makeTableRowCustomersMarkUp = customers => {
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

//! SearchCustomers

const searchInput = document.querySelector('.search-field__input');

const onSearchInput = e => {
  const searchCustomers = [];
  const filter = e.target.value.toLowerCase();

  customers.forEach(customer => {
    if (customer.name.toLowerCase().includes(filter)) {
      searchCustomers.push(customer);
    }

    console.log(searchCustomers);
    tableBody.innerHTML = makeTableRowCustomersMarkUp(searchCustomers);
  });
};

searchInput.addEventListener('input', onSearchInput);
