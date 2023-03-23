package com.advanced_web_technologies.whatandwhere.repository

import com.advanced_web_technologies.whatandwhere.model.Parade
import org.springframework.data.repository.CrudRepository

interface ParadeRepository : CrudRepository<Parade, Long> {
    fun findByTitle(slug: String): Parade?
    fun findAllByOrderByAddedAtDesc(): Iterable<Parade>
}