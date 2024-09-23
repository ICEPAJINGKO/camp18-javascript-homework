const input = prompt("Enter your design token");

let designToken = {
    'color-primary-500': '#3498db',
    'color-secondary-500': '#2ecc71',
    'text-color': '#333333',
    'font-base': '16px',
    'font-weight-light': '300',
    'font-weight-regular': '400',
    'font-weight-bold': '700',
    'spacing-small': '8px',
    'spacing-medium': '16px',
    'spacing-large': '24px',
    'border-radius-small': '4px',
    'border-radius-medium': '8px',
    'border-radius-large': '12px',
}

alert(designToken[input] || 'Design token ' + input + ' not found.');

/*
Lab16 Conditional: Design Token
- ให้ผู้เรียนเขียน Code สำหรับเก็บค่า design-token ไว้ในตัวแปรหนึ่ง(ชื่อตัวแปรกำหนดเอง)
- เมื่อผู้ใช้งานโปรแกรมใส่ชื่อ design-token เข้ามาให้ตัวแปรเก็บค่าที่ทางทีม Design ได้กำหนดไว้ออกไปและแสดงผล (alert)
- หากผู้ใช้งานกรอกชื่อ Design Token ที่ไม่มีอยู่ให้แสดงผล `Design token _____ not found.`  (alert)และหยุดการทำงานของโปรแกรม

Design token คืออะไร ? 


Design token specification จากทีม Designer

'color-primary-500': '#3498db';
'color-secondary-500': '#2ecc71';
'text-color': '#333333';
'font-base': '16px';
'font-weight-light': '300';
'font-weight-regular': '400';
'font-weight-bold': '700';
'spacing-small': '8px';
'spacing-medium': '16px';
'spacing-large': '24px';
'border-radius-small': '4px';
'border-radius-medium': '8px';
'border-radius-large': '12px';
*/