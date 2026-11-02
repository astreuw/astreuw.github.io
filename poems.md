---
layout: page
title: Poesias
description: Minhas poesias (apenas em português)
permalink: /poems
---

<section class="flex flex-col gap-2" aria-labelledby="poems-heading">
  <h1 id="poems-heading" class="text-2xl font-bold tracking-wide text-stone-900 dark:text-neutral-50">Poesias</h1>
  <p class="text-stone-600 dark:text-neutral-400">Minhas poesias, escritas apenas em português.</p>

  {% assign poems = site.poems | sort: "date" | reverse %}
  {% if poems.size == 0 %}
  <p>Nenhuma poesia publicada ainda.</p>
  {% else %}
  <ul class="flex flex-col gap-2">
    {% for poem in poems %}
    <li>
      <article>
        <a href="{{ poem.url | relative_url }}" class="flex flex-col gap-1 p-4 rounded-xl hover:bg-stone-300/40 dark:hover:bg-neutral-800/40 transition-all duration-300 hover:-translate-y-1">
          <h2 class="text-xl font-bold text-stone-900 dark:text-neutral-50">{{ poem.title }}</h2>
          <time datetime="{{ poem.date | date_to_xmlschema }}" class="text-sm text-stone-600 dark:text-neutral-400">{{ poem.date | date: "%d/%m/%Y" }}</time>
          <p class="text-stone-600 dark:text-neutral-400">{{ poem.description }}</p>
        </a>
      </article>
    </li>
    {% endfor %}
  </ul>
  {% endif %}
</section>
