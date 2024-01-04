const formatTime = (time) => {
  if (time < 10) {
    return `0${time}`
  } else {
    return time
  }
}

const transformTime = (time) => {
  const min = Math.trunc(time / 60)
  const sec = time % 60

  return `${formatTime(min)} : ${formatTime(sec)}`
}

export default transformTime
