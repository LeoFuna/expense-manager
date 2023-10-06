import { DateContext } from "@/contexts/dateContext";
import { addMonths } from "date-fns";
import { useContext, useState } from "react";

const BRAZIL_MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]


function useDateNavigation() {
  const dateContext = useContext(DateContext);
  const [date, setDate] = useState(new Date());
  const currentMonthInBr = BRAZIL_MONTHS[date.getMonth()];
  const currentYear = date.getFullYear();

  const changeMonth = (direction: 'next' | 'prev') => {
    if (direction === 'prev') {
      const dateNavigated = addMonths(date, -1)
      setDate(dateNavigated)
      dateContext.setDate(dateNavigated);
      return
    }
    const dateNavigated = addMonths(date, 1)
    setDate(dateNavigated)
    dateContext.setDate(dateNavigated);
  }

  return { currentMonthInBr, currentYear, changeMonth }
}

export {
  useDateNavigation,
}