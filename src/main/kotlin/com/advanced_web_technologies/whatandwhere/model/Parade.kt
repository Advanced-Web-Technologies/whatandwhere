package com.advanced_web_technologies.whatandwhere.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import java.time.LocalDateTime

@Entity
class Parade(
        var title: String,
        var headline: String,
        var content: String,
        var photo: String,
        var score: Double,
        @ManyToOne var author: User,
        var addedAt: LocalDateTime = LocalDateTime.now(),
        @Id @GeneratedValue var id: Long? = null)