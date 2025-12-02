import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeaturekey, AuthState } from "./auth.reducer";

export const selectAuthSatate = createFeatureSelector<AuthState>(authFeaturekey)
export const selectUser = createSelector(selectAuthSatate, (state: AuthState) => state.user)

export const selectIsAuth = createSelector(
  selectAuthSatate,
  (state: AuthState) => state.user !== null
);