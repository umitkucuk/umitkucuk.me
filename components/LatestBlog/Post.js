import React from 'react'
import Link from 'next/link'
import { CardContent } from '../card'
import { H4 } from '../Globals'
import * as S from './style'

export default class Post extends React.Component {
  render() {
    return (
      <S.PostCard>
        <Link href={`/blog/${this.props.post.slug}`} prefetch>
          <a>
            <CardContent>
              <S.PostThumbnail />
              <S.PostTag>Design</S.PostTag>
              &bull;
              <S.PostDate>{this.props.post.date}</S.PostDate>
              <H4>{this.props.post.title}</H4>
            </CardContent>
          </a>
        </Link>
      </S.PostCard>
    )
  }
}
