import { useTranslation as useI18nTranslation } from "react-i18next"

/*
  Typed wrapper around react-i18next's useTranslation hook.
  Accepts a namespace string (matching a locales/<lang>/<namespace>.json file)
  and returns a strongly-typed `t` function for that namespace.

  Usage:
    const { t } = useTranslation("home")
    t("welcome.title")  // resolves key from locales/en/home.json
*/
export function useTranslation(namespace: string) {
  return useI18nTranslation(namespace)
}