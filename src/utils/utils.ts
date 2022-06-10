export const dateStringtoData = (dateString: string) :Date =>{
  const [day, month, year] = dateString.split('/')
  return new Date( parseInt(year),parseInt(month) - 1,  parseInt(day))
}