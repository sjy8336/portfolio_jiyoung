const webS = new Swiper('.web_s', {
    loop: true,
    autoplay:{delay:2000},
});
const bigD = document.querySelector('.big_bg');
const detail_img = document.querySelectorAll('.detail li div img');
const big_img = document.querySelector('.big_bg img');
const body = document.querySelectorAll('body');
bigD.style.display = 'none';
for(let detail of detail_img){//6개 이미지 반복문 접근
    detail.addEventListener('click',(e)=>{
        //클릭한 대상 관련에 a가 있다면 스크롤 위로 올라가는 기능 막기
        e.preventDefault()
        //큰 이미지 부모 보이기
        bigD.style.display = 'block'
        //팝업 실행 시 body 스크롤 막기
        document.body.style.overflow = 'hidden';
        //클릭한 이미지의 경로(src)를 큰 이미지 팝업의 src로 대입하기
        big_img.src = detail.src
        //이전 팝업에서 내린 스크롤을 기억하지 않도록 항상 스크롤 위로 올리기
        bigD.children[0].scrollTo(0,0)
    })
}
//팝업 출력 시 팝업 닫기
bigD.addEventListener('click',()=>{
    bigD.style.display = 'none'
    document.body.style.overflow = '';
})
const ports = new Swiper(".main",{
    direction:'vertical',
    mousewheel:true,
    speed:700,
})