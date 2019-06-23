import React from 'react'
import Link from 'next/link'
import { CardContent } from '../card'
import { H4 } from '../Globals'
import * as S from './style'

export default props => {
  return (
    <S.PostCard>
      <Link href={`/blog/${props.post.slug}`} prefetch>
        <a href="/">
          <CardContent>
            <S.PostThumbnail />
            <S.PostTag>Design</S.PostTag>
            &bull;
            <S.PostDate>{props.post.date}</S.PostDate>
            <H4>{props.post.title}</H4>
          </CardContent>
        </a>
      </Link>
    </S.PostCard>
  )
}
