import HomeImgCarousel from '@/components/HomeImgCarousel';

export default function Home() {
  return (
    <>
      <HomeImgCarousel />
      <div className="mt-12 mb-5 text-gray-700 text-base">
        <p className="text-2xl font-bold">안녕하세요. 원더아트 스튜디오 원장 ‘전수진’ 입니다.</p>
        <br />
        <br />
        <p>
          저는 경희대학교에서 디자인을 전공하였고, 교직이수를 통해 중등학교 정교사 2급 자격증 취득 후 <br />
          수원 Y 여고에서 미술 과목 교생실습을 완료하였습니다. 대학 시절부터 미술 교육 현장에 있으면서 <br />
          창의 미술, 수채화, 소묘 등 다양한 연령의 아이들과 함께 수업해오며 다년간 쌓아온 경험을 <br />
          바탕으로 <span className="text-primary-color font-bold text-xl">연령별, 단계별 맞춤 교육의 노하우</span>를
          가지고 있다고 자신합니다.
        </p>
        <br />
        <p>
          이 작은 예술공간에서 원더아트 아이들은
          <br />
          <span className="text-primary-color">◆</span> 자유롭게 생각을 이야기하고 표현하며 자연스럽게 예술을 접하고,
          <br />
          <span className="text-primary-color">◆</span> 다양한 것들을 경험하며 자신의 가능성을 높여나가며, <br />
          <span className="text-primary-color">◆</span> 즐겁고 행복하게 정답이 아닌 자신만의 “색깔”을 찾아 나갈
          것입니다.
        </p>
        <br />
        <p>
          아이들에게 원더아트의 작업은 때때로 자신의 한계에 도달하기도 하며 힘이 든다고 느껴질 수도 있습니다. <br />
          또, 부모님들께서 느끼시기에 프로그램이 생소하거나 결과물이 만족스럽지 않으실 수도 있습니다. <br />
          그러나 결과물이 아닌 아이의 작품 제작스토리와 과정 등 아이의 생각과 표정을 읽어주신다면, <br />
          그리고 천천히 그 가능성을 믿고 기다려주신다면 실력의 성장뿐만 아니라 본인의 색깔을 당당하게 설명할 수 있는
          아이들을 만나실 수 있을 것입니다. <br />
          아이들이 만들어가는 작은 작품과 그 색을 통해 더 큰 세상을 보실 수 있기를 바라봅니다.
        </p>
        <br />
        <br />
        <p className="text-right font-bold text-2xl">원더아트 스튜디오 원장 드림</p>
      </div>
    </>
  );
}
