/**
 * Converter uma data em uma string de tempo relativo, como:
* "há um minuto", "em 2 horas", "ontem", "há 3 meses", etc.
* usando Intl.RelativeTimeFormat
 */
export function getRelativeTimeString(
  date: Date | number,
  lang = navigator.language,
): string {
  // Permitir que datas ou horários sejam ultrapassados
  const timeMs = typeof date === 'number' ? date : date.getTime()

  // Obtenha a quantidade de segundos entre a data fornecida e o momento atual.
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)

  // Array representando um minuto, hora, dia, semana, mês, etc., em segundos.
  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity,
  ]

  // Array equivalente à anterior, mas na representação em string das unidades.
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ]

  // Escolha a unidade de corte ideal.
  const unitIndex = cutoffs.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds),
  )

  // Obtenha o divisor a ser usado para dividir os segundos. Por exemplo, se nossa unidade for "dia", nosso divisor será...
  // é um dia em segundos, então podemos dividir nossos segundos por isso para obter o número de dias.
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1


  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}