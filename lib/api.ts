import type { User, UserRow } from "@/types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetch all users from JSONPlaceholder and return flat UserRow array
 */
export async function fetchUsers(): Promise<UserRow[]> {
  const response = await fetch(`${BASE_URL}/users`, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch users: ${response.status} ${response.statusText}`
    );
  }

  const users: User[] = await response.json();

  // Flatten nested objects into table-ready rows
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    companyName: user.company.name,
    city: user.address.city,
    phone: user.phone,
    website: user.website,
  }));
}

/**
 * Get distinct cities from user list
 */
export function extractCities(users: UserRow[]): string[] {
  const cities = new Set(users.map((u) => u.city));
  return Array.from(cities).sort();
}
