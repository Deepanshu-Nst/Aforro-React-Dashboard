// User types from JSONPlaceholder API

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// Table-ready flattened user row
export interface UserRow {
  id: number;
  name: string;
  email: string;
  companyName: string;
  city: string;
  phone: string;
  website: string;
}

// Filter/sort state for the users table
export interface UsersTableState {
  search: string;
  sortOrder: "asc" | "desc" | null;
  cityFilter: string;
}
