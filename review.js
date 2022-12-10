// HTMLの<form>要素を取得
const form = document.querySelector('form');

// 復習スケジュールを表示する<tbody>要素を取得
const scheduleTBody = document.querySelector('#schedule');

function calculateNextReviewDate(today, count, reviewIntervals) {
    // 今日から1日後を計算
    let nextReviewDate = new Date(today);
    nextReviewDate.setDate(today.getDate() + 1);
  
    for (let i = 0; i < count; i++) {
      nextReviewDate.setDate(nextReviewDate.getDate() + reviewIntervals[i]);
    }
  
    return nextReviewDate;
  }

// 入力フォームが送信されたときの処理
form.addEventListener('submit', (e) => {
  // ページがリロードされるのを防ぐ
  e.preventDefault();

  // 入力された復習内容を取得
  const subject = document.querySelector('#subject').value;

  // 今日の日付を取得
  const today = new Date();

  // 復習スケジュールを計算し、<tbody>要素に表示
  let scheduleHtml = '';
  const reviewIntervals = [1, 2, 7, 16, 35, 62]
  for (let i = 0; i < reviewIntervals.length; i++) {
    const reviewDate = calculateNextReviewDate(today, i, reviewIntervals);
    const tr = document.createElement('tr');
    tr.innerHTML=`
        <td>${reviewDate.toLocaleDateString()}</td>
        <td>${subject}</td>`
    
    scheduleTBody.appendChild(tr);
    }})
