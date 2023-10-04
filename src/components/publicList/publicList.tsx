import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { usePosts } from '@hooks/usePost';
import Link from 'next/link';
import { BOARD_TYPE } from '@common/constants';

export default function PublicList() {
  const [emotion, setEmotion] = useState('HAPPINESS');
  //게시글 조회 타입에러
  // TODO : ✅ 게시글 조회 설명
  const { data: posts } = usePosts(BOARD_TYPE.RECOMMEND, emotion);

  console.log('해당 posts들이 들어오고있어요', posts); //들어옴

  //감정 카테고리가 바뀔 때마다
  const handleEmotionChange = (e: any) => {
    const { value } = e.target;
    setEmotion(value);
    return emotion;
  };
  console.log('버튼 클릭:', emotion);

  return (
    <>
      <div style={{ marginTop: '2%' }}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleEmotionChange}
          >
            <FormControlLabel name="emotion" value="HAPPINESS" control={<Radio />} label="HAPPINESS" />
            <FormControlLabel name="emotion" value="SADNESS" control={<Radio />} label="SADNESS" />
            <FormControlLabel name="emotion" value="ANGER" control={<Radio />} label="ANGER" />
            <FormControlLabel name="emotion" value="FEAR" control={<Radio />} label="FEAR" />
            <FormControlLabel name="emotion" value="LOVE" control={<Radio />} label="LOVE" />
            <FormControlLabel name="emotion" value="SURPRISE" control={<Radio />} label="SURPRISE" />
          </RadioGroup>
        </FormControl>
        <TableContainer sx={{ width: '100%', margin: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>No</TableCell>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>감정</TableCell>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>게시글</TableCell>
                {/* <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>작성자</TableCell> */}
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>댓글</TableCell>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>북마크</TableCell>
                <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>작성일자</TableCell>
              </TableRow>
            </TableHead>
            {posts ? (
              <TableBody>
                {posts.map((post, index) => (
                  <TableRow key={post.id} hover>
                    <TableCell style={{ textAlign: 'center' }}>{index + 1}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{post.emotion}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      <Link href={`/public-board/${post.id}`}>
                        {post.author.nickname}님의 {post.title}
                      </Link>
                    </TableCell>
                    {/* <TableCell style={{ textAlign: 'center' }}>{post.author.nickname}</TableCell> */}
                    <TableCell style={{ textAlign: 'center' }}>{post?.commentsCnt ?? 0}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{post?.bookmarksCnt ?? 0}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{post.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <></>
            )}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
