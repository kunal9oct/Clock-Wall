// Main Clock Javascript 
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (30*htime + mtime/2);
   mrotation = 6*mtime;
   srotation = 6*stime;

   hour.style.transform = `rotate(${hrotation}deg)`;
   minute.style.transform = `rotate(${mrotation}deg)`;
   second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Wall Clock 1
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (48*htime + mtime/2);
   mrotation = 11*mtime;
   srotation = 13*stime;

   hour1.style.transform = `rotate(${hrotation}deg)`;
   minute1.style.transform = `rotate(${mrotation}deg)`;
   second1.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Wall Clock 2
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (41*htime + mtime/2);
   mrotation = 10*mtime;
   srotation = 11*stime;

   hour2.style.transform = `rotate(${hrotation}deg)`;
   minute2.style.transform = `rotate(${mrotation}deg)`;
   second2.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Wall Clock 3
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (45*htime + mtime/2);
   mrotation = 9*mtime;
   srotation = 12*stime;

   hour3.style.transform = `rotate(${hrotation}deg)`;
   minute3.style.transform = `rotate(${mrotation}deg)`;
   second3.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Wall Clock 4
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (50*htime + mtime/2);
   mrotation = 13*mtime;
   srotation = 14*stime;

   hour4.style.transform = `rotate(${hrotation}deg)`;
   minute4.style.transform = `rotate(${mrotation}deg)`;
   second4.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Wall Clock 5
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (55*htime + mtime/2);
   mrotation = 15*mtime;
   srotation = 16*stime;

   hour5.style.transform = `rotate(${hrotation}deg)`;
   minute5.style.transform = `rotate(${mrotation}deg)`;
   second5.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Wall Clock 6
setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = (60*htime + mtime/2);
   mrotation = 17*mtime;
   srotation = 18*stime;

   hour6.style.transform = `rotate(${hrotation}deg)`;
   minute6.style.transform = `rotate(${mrotation}deg)`;
   second6.style.transform = `rotate(${srotation}deg)`;
}, 1000);
