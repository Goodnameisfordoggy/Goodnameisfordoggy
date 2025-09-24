// audio-control.js：控制 details 展开/折叠时的音乐播放
document.addEventListener('DOMContentLoaded', function() {
  // 等待页面所有元素加载完成后再执行（避免元素未加载导致获取失败）
  const detailsElement = document.getElementById('audioDetails');
  const audioElement = document.getElementById('targetAudio');

  // 检查元素是否存在
  if (!detailsElement || !audioElement) {
    console.warn('未找到 audioDetails 或 targetAudio 元素，音乐控制功能无法启用');
    return;
  }

  // 监听 toggle 事件
  detailsElement.addEventListener('toggle', function() {
    if (detailsElement.open) {
      audioElement.play()
        .catch(error => {
          alert('音乐播放需要您的手动授权，请点击播放器的播放按钮~');
          audioElement.hidden = false;
        });
      audioElement.hidden = false;
    } else {
      audioElement.pause();
    }
  });
});