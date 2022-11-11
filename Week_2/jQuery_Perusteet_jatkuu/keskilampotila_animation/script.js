"use strict";

// jQuery
// Source: https://www.ilmatieteenlaitos.fi/vuosi-2020

// Lämpötilojen Olio
const weatherObject = {
  tammikuuYlin: 9.2,
  tammikuuAlin: -38.8,
  helmikuuYlin: 9.0,
  helmikuuAlin: -32.3,
  maaliskuuYlin: 12.6,
  maaliskuuAlin: -31.8,
  huhtikuuYlin: 17.5,
  huhtikuuAlin: -27.2,
  toukokuuYlin: 24.5,
  toukokuuAlin: -12.6,
  kesäkuuYlin: 33.5,
  kesäkuuAlin: -2.6,
  heinäkuuYlin: 27.7,
  heinäkuuAlin: -0.9,
  elokuuYlin: 29.4,
  elokuuAlin: -4.2,
  syyskuuYlin: 23.5,
  syyskuuAlin: -7.1,
  lokakuuYlin: 18.7,
  lokakuuAlin: -20.5,
  marraskuuYlin: 16.6,
  marraskuuAlin: -21.6,
  joulukuuYlin: 8.5,
  joulukuuAlin: -41.2,
};

// Lämpötilojen värimuunnoksvärit
const colorChangeObj = {
  // Warm colors
  kuuma: "red",
  lämmin: "#ffc900",
  melkolämmin: "#ffa500",

  // Cold colors
  kylmä: "blue",
  melkoKylmä: "purple",
  kohtuullinen: "green",
};

// Funktio, joka laskee näennäisen keskilämpötilan
let avg;

function calcAvg(lowest, highest) {
  avg = ((lowest + highest) / 2).toFixed(1);
  return avg;
}

// Funktio, joka varastoi listaan keskilämpötilat
const avgArr = [];

function restoreAvgToArray() {
  avgArr.push(calcAvg(weatherObject.tammikuuAlin, weatherObject.tammikuuYlin));
  avgArr.push(calcAvg(weatherObject.helmikuuAlin, weatherObject.helmikuuYlin));
  avgArr.push(
    calcAvg(weatherObject.maaliskuuAlin, weatherObject.maaliskuuYlin)
  );
  avgArr.push(calcAvg(weatherObject.huhtikuuAlin, weatherObject.huhtikuuYlin));
  avgArr.push(calcAvg(weatherObject.toukokuuAlin, weatherObject.toukokuuYlin));
  avgArr.push(calcAvg(weatherObject.kesäkuuAlin, weatherObject.kesäkuuYlin));
  avgArr.push(calcAvg(weatherObject.heinäkuuAlin, weatherObject.heinäkuuYlin));
  avgArr.push(calcAvg(weatherObject.elokuuAlin, weatherObject.elokuuYlin));
  avgArr.push(calcAvg(weatherObject.syyskuuAlin, weatherObject.syyskuuYlin));
  avgArr.push(calcAvg(weatherObject.lokakuuAlin, weatherObject.lokakuuYlin));
  avgArr.push(
    calcAvg(weatherObject.marraskuuAlin, weatherObject.marraskuuYlin)
  );
  avgArr.push(calcAvg(weatherObject.joulukuuAlin, weatherObject.joulukuuYlin));
}

// jQuery
$(document).ready(function () {
  $("button").click(function () {
    restoreAvgToArray();
    $(".tammikuu").animate(
      {
        width: `${Number(avgArr[0]) + 500}px`,
        backgroundColor: `${colorChangeObj.kylmä}`,
      },
      "slow"
    );
    $(".tammikuu").html(`Tammikuu: ${Number(avgArr[0])} ℃`);
    $(".helmikuu").animate(
      {
        width: `${Number(avgArr[1]) + 500}px`,
        backgroundColor: `${colorChangeObj.kylmä}`,
      },
      "slow"
    );
    $(".helmikuu").html(`Helmikuu: ${Number(avgArr[1])} ℃`);
    $(".maaliskuu").animate(
      {
        width: `${Number(avgArr[2]) + 500}px`,
        backgroundColor: `${colorChangeObj.melkoKylmä}`,
      },
      "slow"
    );
    $(".maaliskuu").html(`Maaliskuu: ${Number(avgArr[2])} ℃`);
    $(".huhtikuu").animate(
      {
        width: `${Number(avgArr[3]) + 500}px`,
        backgroundColor: `${colorChangeObj.kohtuullinen}`,
      },
      "slow"
    );
    $(".huhtikuu").html(`Huhtikuu: ${Number(avgArr[3])} ℃`);
    $(".toukokuu").animate(
      {
        width: `${Number(avgArr[4]) + 500}px`,
        backgroundColor: `${colorChangeObj.kohtuullinen}`,
      },
      "slow"
    );
    $(".toukokuu").html(`Toukokuu: ${Number(avgArr[4])} ℃`);
    $(".kesäkuu").animate(
      {
        width: `${Number(avgArr[5]) + 500}px`,
        backgroundColor: `${colorChangeObj.kuuma}`,
      },
      "slow"
    );
    $(".kesäkuu").html(`Toukokuu: ${Number(avgArr[5])} ℃`);
    $(".heinäkuu").animate(
      {
        width: `${Number(avgArr[6]) + 500}px`,
        backgroundColor: `${colorChangeObj.lämmin}`,
      },
      "slow"
    );
    $(".heinäkuu").html(`Heinäkuu: ${Number(avgArr[6])} ℃`);
    $(".elokuu").animate(
      {
        width: `${Number(avgArr[7]) + 500}px`,
        backgroundColor: `${colorChangeObj.lämmin}`,
      },
      "slow"
    );
    $(".elokuu").html(`Elokuu: ${Number(avgArr[7])} ℃`);
    $(".syyskuu").animate(
      {
        width: `${Number(avgArr[8]) + 500}px`,
        backgroundColor: `${colorChangeObj.melkolämmin}`,
      },
      "slow"
    );
    $(".syyskuu").html(`Syyskuu: ${Number(avgArr[8])} ℃`);
    $(".lokakuu").animate(
      {
        width: `${Number(avgArr[9]) + 500}px`,
        backgroundColor: `${colorChangeObj.kohtuullinen}`,
      },
      "slow"
    );
    $(".lokakuu").html(`Lokakuu: ${Number(avgArr[9])} ℃`);
    $(".marraskuu").animate(
      {
        width: `${Number(avgArr[10]) + 500}px`,
        backgroundColor: `${colorChangeObj.melkoKylmä}`,
      },
      "slow"
    );
    $(".marraskuu").html(`Marraskuu: ${Number(avgArr[10])} ℃`);
    $(".joulukuu").animate(
      {
        width: `${Number(avgArr[11]) + 500}px`,
        backgroundColor: `${colorChangeObj.kylmä}`,
      },
      "slow"
    );
    $(".joulukuu").html(`Joulukuu: ${Number(avgArr[11])} ℃`);

    // test
    // setTimeout(function () {
    //   $("ul").css("transform", "skew(100deg)");
    //   setTimeout(function () {
    //     $("ul").css("transform", "skew(0)");
    //   }, "2000");
    // }, "2000");
  });
});
