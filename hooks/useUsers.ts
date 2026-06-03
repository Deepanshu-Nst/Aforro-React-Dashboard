"use client";

import { useState, useEffect } from "react";
import { fetchUsers, extractCities } from "@/lib/api";
import type { UserRow } from "@/types/user";

export interface UseUsersReturn {
  users: UserRow[];
  cities: string[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
      setCities(extractCities(data));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { users, cities, isLoading, error, refetch: load };
}
