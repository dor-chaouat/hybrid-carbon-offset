import type { Settings } from "../types";

export const SETTINGS_COLLECTION_ID = "@dorcha/hybrid-carbon-offset/Settings";
export const CHECKOUT_COLLECTION_ID = "@dorcha/hybrid-carbon-offset/checkout";
export const DEFAULT_SETTING: Settings = {
  title: 'Make it carbon neutral',
  amount: 2,
  color: '#000000',
  iconColor: '#000000',
};
