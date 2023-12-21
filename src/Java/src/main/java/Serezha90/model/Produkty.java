package Serezha90.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha90.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Продукты
 */
@Entity(name = "IISSerezha90Продукты")
@Table(schema = "public", name = "Продукты")
public class Produkty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодПродукта")
    private Integer кодпродукта;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Производитель")
    private String производитель;


    public Produkty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодПродукта() {
      return кодпродукта;
    }

    public void setКодПродукта(Integer кодпродукта) {
      this.кодпродукта = кодпродукта;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getПроизводитель() {
      return производитель;
    }

    public void setПроизводитель(String производитель) {
      this.производитель = производитель;
    }


}