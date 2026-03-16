const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};
setText("aboutMe_part1", data.aboutMe_part1);
setText("aboutMe_part2", data.aboutMe_part2);

const overview = data.overview;

setText("9", overview[0].number);
setText("annee_experience", overview[0].label);

setText("800+", overview[1].number);
setText("students_taught", overview[1].label);

setText("20+", overview[2].number);
setText("topics", overview[2].label);

const courses = data.homeCourses;

setText("development", courses[0].tag);
setText("fundamentals", courses[0].title);
setText("online", courses[0].mode);
setText("8_weeks", courses[0].duration);

setText("translation", courses[1].tag);
setText("technical", courses[1].title);
setText("hybrid", courses[1].mode);
setText("6_weeks", courses[1].duration);

setText("research", courses[2].tag);
setText("academic", courses[2].title);
setText("offline", courses[2].mode);
setText("10_weeks", courses[2].duration);

const exp = data.experiences;

setText("2026_present", exp[0].year);
setText("consultant", exp[0].role);
setText("independant", exp[0].org);
setText("advising", exp[0].desc);

setText("2024", exp[2].year);
setText("phd", exp[2].role);
setText("universite", exp[2].org);
setText("self_founded", exp[2].desc);

setText("2021_2026", exp[1].year);
setText("study", exp[1].role);
setText("hei", exp[1].org);
setText("responsible", exp[1].desc);

setText("2017_2020", exp[3].year);
setText("teacher", exp[3].role);
setText("esmia", exp[3].org);
setText("taught", exp[3].desc);