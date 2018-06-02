package pl.edu.agh.wiet.taiproject.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.edu.agh.wiet.taiproject.model.data.Category;

import java.util.stream.Stream;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("SELECT category FROM Category category")
    Stream<Category> categoryStream();
}
